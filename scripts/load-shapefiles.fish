#!/usr/bin/fish
# This script loads the shapefiles into the database

### DIRECTORIES
set -x PROJ_ROOT (git rev-parse --show-toplevel)
set -x DATA_DIR $PROJ_ROOT"/data"
set -x BOUNDS_DIR $DATA_DIR"/boundaries"
set -x CONFIG $PROJ_ROOT"/config.json"
set -x TMP_DIR $PROJ_ROOT"/tmp"
set -x CSA_SHP $BOUNDS_DIR"/csas/boundaries.shp"
set -x NSA_SHP $BOUNDS_DIR"/nsas/boundaries.shp"
set -x SWS_SHP $BOUNDS_DIR"/subwatersheds/boundaries.shp"

### CONFIG VARS
set -x HOST (jq '.connection.host' $CONFIG | tr -d '"')		# gotta remove extra quotes
set -x USER (jq '.connection.user' $CONFIG | tr -d '"')
set -x PORT (jq '.connection.port' $CONFIG | tr -d '"')
set -x DB (jq '.connection.database' $CONFIG | tr -d '"')
set -x PGPASSWORD (jq '.connection.password' $CONFIG | tr -d '"')

echo $PGPASSWORD

### SETTING UP
mkdir -p $TMP_DIR		# Make sure tmp dir exists
psql -h $HOST -U $USER -p $PORT -d $DB -w -c "CREATE SCHEMA IF NOT EXISTS \"boundaries\""

### RUNNING SHP2PGSQL
shp2pgsql -s 2248:4326 -g geometry $CSA_SHP boundaries.csas > $TMP_DIR"/csas.sql"
shp2pgsql -s 2248:4326 -g geometry $NSA_SHP boundaries.nsas > $TMP_DIR"/nsas.sql"
shp2pgsql -s 4326:4326 -g geometry $SWS_SHP boundaries.subwatersheds > $TMP_DIR"/subwatersheds.sql"

### LOADING
psql -h $HOST -U $USER -p $PORT -d $DB -w -f $TMP_DIR"/csas.sql"
psql -h $HOST -U $USER -p $PORT -d $DB -w -f $TMP_DIR"/nsas.sql"
psql -h $HOST -U $USER -p $PORT -d $DB -w -f $TMP_DIR"/subwatersheds.sql"

### CLEANING UP
rm -rf $TMP_DIR			# Remove tmp dir and everything in it
