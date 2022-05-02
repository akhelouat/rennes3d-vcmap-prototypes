import { MapCollection, OpenlayersMap, OpenStreetMapLayer, TerrainLayer, VectorTileLayer, ViewPoint } from "@vcmap/core";
import { useEffect, useState, useRef } from "react";
import styles from './Map.module.css';

function Map() {
  const [context, setContext] = useState(null);
  const mapRef = useRef(null);

  const setupMap = () => {
    const map2d = new MapCollection();

    map2d.setTarget(mapRef.current);
    map2d.add(new OpenlayersMap({ name: 'ol', fixedNorthOrientation: false }));

    return map2d;
  }

  const setupLayers = async (layerCollection) => {
    const osm = new OpenStreetMapLayer({ name: 'osmBase' });
    layerCollection.add(osm);

    // Adding terrain
    const terrain = new TerrainLayer({
      name: 'terrain',
      url: '../../data/terrain',
    });
    layerCollection.add(terrain);

    // Adding VectorTiles
    const vectorTiles = new VectorTileLayer({
      mapNames: ['ol'],
      tileProvider: {
        type: 'MVTTileProvider',
        url: '../../data/vectorTiles/{z}/{x}/{y}.pbf',
        baseLevels: [12, 13, 14, 15],
        idProperty: 'gmlid',
      },
      extent: {
        coordinates: [8.6521196, 50.7494957, 8.8483077, 50.8534806],
        epsg: 4326,
      },
    });
    layerCollection.add(vectorTiles);

    await Promise.all([...layerCollection].map(async (l) => l.activate()));

    return layerCollection;
  }

  const start = async () => {
    const ctx = setupMap();

    ctx.startingVP = new ViewPoint({
      cameraPosition: [8.768696469559748, 50.80547556213949, 344.18806877180543],
      groundPosition: [8.768240344556459, 50.81012228093323, 263.91238143570325],
      pitch: -28,
    });

    ctx.layerCollection = await setupLayers(ctx.layerCollection);


    await Promise.all([ctx].map(async (collection) => {
      await collection.setActiveMap([...collection][0].name);
      await collection.activeMap.gotoViewPoint(ctx.startingVP);
    }));

    ctx.gotoViewPoint = async (vp) => {
      await Promise.all([
        ctx.activeMap.gotoViewPoint(vp)
      ])
    }

    window.vcs = { ctx };
    setContext(ctx);
  }

  useEffect( () => {
   start();
  }, [])

  return (
    <div>
      <div className={styles.map} ref={mapRef} >

      </div>
    </div>
  )
}

export default Map;