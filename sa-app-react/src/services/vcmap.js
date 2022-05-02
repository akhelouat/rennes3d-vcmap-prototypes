import { MapCollection, OpenlayersMap, OpenStreetMapLayer, TerrainLayer, VectorTileLayer, ViewPoint } from "@vcmap/core";

let context = null;

function destroy() {
  console.log("destroy")

  if (context) {
    context.destroy();
    context = null;
  }
}


function initMap() {
  console.log("init maps")

  const map2d = new MapCollection();

  map2d.setTarget('map');
  map2d.add(new OpenlayersMap({ name: 'ol', fixedNorthOrientation: false }));

  return map2d;
}


async function setupLayers(layerCollection) {
  console.log("setup layers")

  const osm = new OpenStreetMapLayer({ name: 'osmBase' });
  layerCollection.add(osm);

  // Adding terrain
  const terrain = new TerrainLayer({
    name: 'terrain',
    url: 'data/terrain',
  });
  layerCollection.add(terrain);

  // Adding VectorTiles
  const vectorTiles = new VectorTileLayer({
    mapNames: ['ol'],
    tileProvider: {
      type: 'MVTTileProvider',
      url: 'data/vectorTiles/{z}/{x}/{y}.pbf',
      baseLevels: [12, 13, 14, 15],
      idProperty: 'gmlid',
    },
    extent: {
      coordinates: [8.6521196,50.7494957,8.8483077,50.8534806],
      epsg: 4326,
    },
  });
  layerCollection.add(vectorTiles);

  await Promise.all([...layerCollection].map(async (l) => l.activate()));
}

export default async function start() {
  console.log("start")
  if (context) {
    destroy();
  }
  context = initMap();

  context.startingVP = new ViewPoint({
    cameraPosition: [8.768696469559748, 50.80547556213949, 344.18806877180543],
    groundPosition: [8.768240344556459, 50.81012228093323, 263.91238143570325],
    pitch: -28,
  });

  await setupLayers(context.layerCollection);


  await Promise.all([context].map(async (collection) => {
    await collection.setActiveMap([...collection][0].name);
    await collection.activeMap.gotoViewPoint(context.startingVP);
  }));

  context.gotoViewPoint = async (vp) => {
    await Promise.all([
      context.activeMap.gotoViewPoint(vp)
    ])
  }

  window.vcs = { context };
  return context;
}