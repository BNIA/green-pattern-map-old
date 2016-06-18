var gulp = require('gulp')
var ss = require('simple-statistics')
var _ = require('lodash')
var knex = require('knex')
var Promise = require('bluebird')
var path = require('path');
var configPath = path.join(process.cwd(),'config/config.json');
var config = require(configPath);

gulp.task('colorize_vs', () => {
    var pg = knex({
        client: 'pg',
        connection: config.connection
    })
    return pg.select([
		'indicators.*',
		'sections.section',
		'sections.color1',
		'sections.color2',
		'sections.color3',
		'sections.color4',
		'sections.color5'
	])
        .from('vital_signs.indicators')
        .leftJoin('vital_signs.sections', 'indicators.section_id', 'sections.id')
        .map((row) => {
            return pg
				.select('id')
                .select(row.short_name)
                .select('data.csa')
                .select('csas.gid')
                .from('vital_signs.data')
                .leftJoin('boundaries.csas', 'data.csa', 'csas.csa')
                .then((rows) => {
                    return {
                        data: rows,
                        vals: _.map(rows, (r) => {
                            return r[row.short_name]
                        }),
                        key: row.short_name,
                        section: row.section,
                        color1: row.color1,
                        color2: row.color2,
                        color3: row.color3,
                        color4: row.color4,
                        color5: row.color5,
                        id: row.id,
                        val: row.long_name,
                        src: row.full_src,
                        format: row.format
                    }
                })
                .then((obj) => {
                    var anyNotNull = _.some(obj.vals, (v) => {
                        return v !== null
                    })
                    if (!anyNotNull) {
                        return null
                    } else {
                        return obj
                    }
                })
                .then((obj) => {
					if (obj == null) {
						return null
					}
                    obj.vals = _.filter(obj.vals, (v) => {
                        return v !== null
                    })
                    obj.vals = _.map(obj.vals, (v) => {
                        return parseFloat(v)
                    })
                    return obj
                })
                .then((obj) => {
                    if (obj == null) {
                        return null
                    }
                    var clusters = ss.ckmeans(obj.vals, 5)
                    obj.breaks = _.map(clusters, (c) => {
                        if (c.length == 1) {
                            return {
                                s: c[0],
                                e: c[0]
                            }
                        } else if (c.length >= 2) {
                            return {
                                s: c[0],
                                e: c[c.length - 1]
                            }
                        }
                    })
                    return obj
                })
                .then((obj) => {
					if (obj == null) {
						return null
					}
                    obj.data = _.map(obj.data, (d) => {
                        d.breakNum = null
                        _.forIn(_.range(0, obj.breaks.length), (i) => {
                            if ((d[obj.key] >= obj.breaks[i].s) && (d[obj.key] <= obj.breaks[i].e)) {
                                d.breakNum = i
								console.log(d.breakNum)
                            }
                        })
						console.log()
                        return d
                    })
                    return obj
                })
                .then((obj) => {
					if (obj == null) {
						return null
					}
                    obj.data = _.map(obj.data, (d) => {
                        var neu = {}
                        neu.color = null
                        if (d.breakNum === 0) {
                            neu.color = obj.color1
                        }
                        if (d.breakNum === 1) {
                            neu.color = obj.color2
                        }
                        if (d.breakNum === 2) {
                            neu.color = obj.color3
                        }
                        if (d.breakNum === 3) {
                            neu.color = obj.color4
                        }
                        if (d.breakNum === 4) {
                            neu.color = obj.color5
                        }
                        neu.id = d.id
                        neu.csa = d.csa
                        neu.val = d[obj.key]
                        neu.csa_id = d.gid
                        return neu
                    })
                    return obj
                })
        })
		.then(rows => _.filter(rows,r => !_.isNil(r)))
        .map(row => {
            return pg('vital_signs.indicators')
                .where('id', row.id)
                .update({
                    'break_l1': row.breaks[0].s,
                    'break_r1': row.breaks[0].e,
                    'break_l2': row.breaks[1].s,
                    'break_r2': row.breaks[1].e,
                    'break_l3': row.breaks[2].s,
                    'break_r3': row.breaks[2].e,
                    'break_l4': row.breaks[3].s,
                    'break_r4': row.breaks[3].e,
                    'break_l5': row.breaks[4].s,
                    'break_r5': row.breaks[4].e
                })
				.return(row)
        })
		.map(row => {
			var p = _.map(row.data, d => {
				return pg('vital_signs.colors')
					.where({id:d.id})
					.update({[row.key]:d.color})
			})
			return Promise.all(p)
		})
        .then(() => {
            return pg.destroy()
        })
})
