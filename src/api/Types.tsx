export type FindingType = { id: number; description: string };

export type NoteGroup = { name: string; description: string; id: number };

export type NoteSectionEntry = {
  name: string;
  count: number;
  sectionID: number;
  groupName: string;
};

export type NoteSection = {
  sectionName: string;
  sectionId: number;
};

export type Note = {
  content: string;
  date: Date;
  createdBy: string;
  sectionID: number;
};

export type NoteEntry = {
  noteCreatedBy: number;
  noteCreatedTime: Date;
  noteEntryContext: string;
  sectionID: number;
  sectionName: string;
  groupName: string;
};

export type User = { id: number; name: string };

export type Employee = {
  name: string;
  emplyeeId: number;
  phone: string;
  email: string;
  role: string;
};

export type SafetyAction = {
  id: number;
  name: string;
  description: string;
  location: string;
  recommendation: string;
  dueOn: Date;
  type: FindingType;
  responsible?: User;
  assignee?: User;
  attachments: Attachment[];
};

export type LinkedAction = {
  typeId: number;
  responsibleId?: number;
  responsible?: string;
  assigneeId?: number;
  assignee?: string;
  name: string;
  comment: string;
  dueOn: string;
  attachments: LinkedAttachment[];
  location: string;
  recommendation: string;
};

export type Finding = {
  id: number;
  name: string;
  description: string;
  type: FindingType;
  recommendation: string;
  location: string;
  area?: FindingType;
  safetyAction?: SafetyAction;
};

export type LinkedFinding = {
  name: string;
  description: string;
  location: string;
  recommendation: string;
  typeId: number;
  areaId: number;
  safetyAction?: LinkedAction;
};

export type Attachment = {
  uri: string;
  description: string;
  blob: string;
  attachmentTypeId: string;
  filename: string;
};

export type LinkedAttachment = {
  fileUrl?: string;
  blob: string;
  attachmentTypeId: string;
  filename: string;
  description: string;
};

export const convertLinkedActionToAction = (
  id: number,
  safetyActionTypes: FindingType[],
  _linkedAction: LinkedAction
) => {
  const typeIndex = safetyActionTypes.findIndex(
    (_type) => _type.id === _linkedAction.typeId
  );

  const _action: SafetyAction = {
    id,
    name: _linkedAction.name,
    description: _linkedAction.comment,
    location: _linkedAction.location,
    recommendation: _linkedAction.recommendation,
    dueOn: new Date(_linkedAction.dueOn),
    type: typeIndex >= 0 ? safetyActionTypes[typeIndex] : safetyActionTypes[0],
    responsible: _linkedAction.responsibleId
      ? {
          id: _linkedAction.responsibleId,
          name: _linkedAction.responsible ?? "",
        }
      : undefined,
    assignee: _linkedAction.assigneeId
      ? { id: _linkedAction.assigneeId, name: _linkedAction.assignee ?? "" }
      : undefined,
    attachments: _linkedAction.attachments.map((_attachment) => ({
      blob: _attachment.blob,
      attachmentTypeId: _attachment.attachmentTypeId,
      filename: _attachment.filename,
      description: _attachment.description,
      uri: _attachment.fileUrl ?? "",
    })),
  };
  return _action;
};

export const convertActionToLinkedAction = (_action: SafetyAction) => {
  const _linkedAction: LinkedAction = {
    typeId: _action.type.id,
    responsibleId: _action.responsible?.id,
    responsible: _action.responsible?.name,
    assigneeId: _action.assignee?.id,
    assignee: _action.assignee?.name,
    name: _action.name,
    comment: _action.description,
    location: _action.location,
    recommendation: _action.recommendation,
    dueOn: _action.dueOn.toISOString(),
    attachments: _action.attachments.map((_attachment) => ({
      blob: _attachment.blob,
      attachmentTypeId: _attachment.attachmentTypeId,
      filename: _attachment.filename,
      description: _attachment.description,
    })),
  };
  return _linkedAction;
};
