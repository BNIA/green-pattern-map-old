#!/usr/bin/fish
# This script retrieves, unzips, and moves shapefiles from external resources

### DIRECTORIES
set -x PROJ_ROOT (git rev-parse --show-toplevel)
set -x DATA_DIR $PROJ_ROOT"/data"
set -x BOUNDS_DIR $DATA_DIR"/boundaries"
set -x LAYERS_DIR $DATA_DIR"/layers"
set -x TMP_DIR $PROJ_ROOT"/tmp"

### SOURCES
set -x NSA_BOUNDS_URL "https://data.baltimorecity.gov/download/6jyd-xzp7/application/zip"
set -x CSA_BOUNDS_URL "https://data.baltimorecity.gov/download/6jyd-xzp7/application/zip"
set -x SWS_BOUNDS_URL "https://data.maryland.gov/api/geospatial/e9j9-vuxg?method=export&format=Shapefile"

### SETTING UP
mkdir -p $TMP_DIR 					# make tmp dir
mkdir -p $BOUNDS_DIR					# make bounds dir
rm -rf $BOUNDS_DIR"/nsas"				# remove current nsas bounds
rm -rf $BOUNDS_DIR"/csas"				# remove current csas bounds
rm -rf $BOUNDS_DIR"/subwatersheds"			# remove current sws bounds

### NEIGHBORHOODS
cd $TMP_DIR
mkdir -p $TMP_DIR"/nsas"
wget $NSA_BOUNDS_URL					# get the zip file
unzip $TMP_DIR"/zip" -d $TMP_DIR"/nsas"			# unzip it
rm $TMP_DIR"/zip"					# remove zip file
cd $TMP_DIR"/nsas"
rename 's/.*\./boundaries\./' ./*.*			# change prefix to nsas
cd $PROJ_ROOT
mv $TMP_DIR"/nsas" $BOUNDS_DIR"/nsas"

### COMMUNITY STATISTICAL AREAS
cd $TMP_DIR
mkdir -p $TMP_DIR"/csas"
wget $CSA_BOUNDS_URL
unzip $TMP_DIR"/zip" -d $TMP_DIR"/csas"
rm $TMP_DIR"/zip"
cd $TMP_DIR"/csas"
rename 's/.*\./boundaries\./' ./*.*
cd $PROJ_ROOT
mv $TMP_DIR"/csas" $BOUNDS_DIR"/csas"

### SUBWATERSHEDS
cd $TMP_DIR
mkdir -p $TMP_DIR"/subwatersheds"
wget --content-disposition $SWS_BOUNDS_URL		# Make sure its something legible
unzip $TMP_DIR"/Maryland's 8 Digit Sub-Watersheds.zip" \
 -d $TMP_DIR"/subwatersheds"
rm $TMP_DIR"/Maryland's 8 Digit Sub-Watersheds.zip"
cd $TMP_DIR"/subwatersheds"
rename 's/.*\./boundaries\./' ./*.*
cd $PROJ_ROOT
mv $TMP_DIR"/subwatersheds" $BOUNDS_DIR"/subwatersheds"

### CLEANUP
rm -rf $TMP_DIR
