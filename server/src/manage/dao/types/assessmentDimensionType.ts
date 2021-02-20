// param
export interface DimensionContentPostParam {
  dimensionId?: number;
  grade: number;
  gradeDesc: string;
  score: number;
}
export interface DimensionPostParam {
  dimensionName: string;
  dimensionContent: Array<DimensionContentPostParam>;
  dimensionCreator?: string;
}
export interface DimensionGetParam {
  dimensionId?: number;
  dimensionName?: string;
  dimensionCreator?: string;
}
// db data
export interface DimensionContentDB {
  dimensionId: number;
  grade: number;
  gradeDesc: string;
  score: number;
}
export interface DimensionDB {
  dimensionId: number;
  dimensionName: string;
  dimensionStatus: '0' | '1';
  dimensionCreator: string;
  dimensionCreateTime: string;
}
export interface AssessmentDimensionDB extends DimensionDB, DimensionContentDB {}

export interface DimensionContent {
  grade: number;
  gradeDesc: string;
  score: number;
}
export interface AssessmentDimension {
  dimensionId: number;
  dimensionName: string;
  dimensionContent: Array<DimensionContent>;
  dimensionStatus: 'draft' | 'cited';
  dimensionCreator: string;
  dimensionCreateTime: string;
}
