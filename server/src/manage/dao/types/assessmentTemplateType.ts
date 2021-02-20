import { AssessmentDimensionDB, AssessmentDimension } from './assessmentDimensionType';

// param
export interface TemplateDimensionPostParam {
  templateId: number;
  dimensionId: number;
}
export interface TemplatePostParam {
  dimensionIds: string; // 1,2,3,4
  templateName: string;
  templateCreator: string;
}
export interface TemplatePutParam {
  dimensionIds?: string; // 1,2,3,4
  templateName?: string;
}
export interface TemplateGetParam {
  templateId?: number;
  templateName?: string;
  templateCreator?: string;
}
// db data
export interface TemplateDimensionDB extends TemplateDimensionPostParam {}
export interface TemplateDB {
  templateId: number;
  templateName: string;
  templateCreator: string;
  templateCreateTime: string;
  templateUpdateTime: string;
}
export interface AssessmentTemplateDB extends TemplateDB, TemplateDimensionDB, AssessmentDimensionDB {}

export interface AssessmentTemplate {
  templateId?: number;
  templateName?: string; // year + phase + group
  dimensionIds?: Array<number>;
  dimensions?: Array<AssessmentDimension>;
  templateCreator?: string;
  templateCreatorName?: string;
  templateCreateTime?: string;
  templateUpdateTime?: string;
  templateStatus?: 'draft' | 'cited';
}
