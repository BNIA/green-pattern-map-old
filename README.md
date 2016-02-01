# Green Pattern Map

An interactive map for the baltimore green pattern book.

Hosted by BNIA-JFI.

## Quick Notes

- A *boundary* is a geometric object overlay, e.g. neighborhoods.
- A *layer* is a set of points.
- Leaflet is all in WGS84, so I had to convert all boundaries
 to WGS84
  - NAD83_Maryland SRID is EPSG:2248
  - WGS84 is EPSG:4326

## Requirements

Before trying to install make sure that you satisfy the requirements.

### OS

- As of now this is only tested (and made for) Ubuntu 14.04

### Software

- Node.js V 5.5.0
- npm V 3.3.12
- Postgresql Server V 9.5
  - See my section
 [here](https://github.com/apathinwalking/linode-config#postgresql)
 for help setting up proper user configuration etc.
- PostGIS
- Fish shell V 2.2.0
  - This is likely to be a requirement I remove
- unzip
- git

## Installation

I detail the step-by-step process of getting this installed and running.

First, cd into the directory you want to install this in, then

```
git clone https://github.com/BNIA/green-pattern-map.git
```

### Configuration

You need to edit the config.json file to match your own configuration.

## TODO

- set up different password authentication method for postgres
