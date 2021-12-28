import { markersLayer } from './markersLayer';
import { geojsonLayer } from './geojsonLayer';
import { heatmapLayer } from './heatMap';
import { lastPointTracker } from './lastPointTracker';
import { routeLayer } from './routeLayer';

/**
 * Registry for layer handlers
 */
export const dataLayers = [markersLayer, heatmapLayer, lastPointTracker, geojsonLayer, routeLayer];
