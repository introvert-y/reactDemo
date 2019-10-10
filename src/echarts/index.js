// import echarts from 'echarts';
import echarts from 'echarts/lib/echarts';

import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/lines';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/effectScatter';
import 'echarts/lib/chart/map';
import 'echarts/lib/chart/scatter';

import 'echarts/lib/component/geo';
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/axis';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/visualMap';
import 'echarts/lib/component/dataZoom';

import chinaJson from './china';

echarts.registerMap('china', chinaJson);

export default echarts;
