import { Guid } from "guid-typescript";
import { ChartPoint } from "../components/scatter-chart/scatter-chart.component";
import { Entity } from "../models/Entities";
import { ILog } from "../services/logger.service";

export interface IResult {
  data: ILog[],
  chartData: ChartPoint[],
  fullDuration: number,
  AvrDuration: number,
  stDeviation: number
}

export const buildExperimentResult = (data: ILog[]): IResult => {
  return {
    data,
    chartData: normalizeData(data).map(v => ({ x: v.start, y: v.duration }) as ChartPoint),
    fullDuration: getFullDuration(data),
    AvrDuration: getAverageDuration(data),
    stDeviation: getStDeviation(data)
  }
}

export const getStDeviation = (data: ILog[]): number => {
  const n = data.length;
  const durations = data.map(y => y.duration);
  const averageY = durations.reduce((a, b) => (a + b)) / n;
  const sqrts = durations.map(y => (y - averageY) ** 2);
  const dispersion = sqrts.reduce((a, b) => (a + b)) / (n - 1);
  return Math.sqrt(dispersion);
}

export const getAverageDuration = (data: ILog[]): number => {
  return data.map(item => item.duration).reduce((a, b) => (a + b)) / data.length;
}

export const getFullDuration = (data: ILog[]): number => {
  if(!data.length) return 0
  const lastItem = data[data.length - 1]
  return lastItem.duration + lastItem.start;
}

export const normalizeData = (data: ILog[]): ILog[] => {
  const stDeviation = getStDeviation(data);
  const averageY = getAverageDuration(data);

  return data.map(z => z.duration < (averageY + 3 * stDeviation) && z.duration > (averageY - 3 * stDeviation) ? z : { ...z, duration: averageY });
}

export const createEntity = (parent: Entity): Entity => {
  const id = Guid.create()
  return { id, name: `object_${Math.floor(Math.random() * 10)}${id}`, parent }
}
