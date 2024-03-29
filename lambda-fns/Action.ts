interface Action {
  id: string;
  name: string
  description: string
  dateCreatedAt: string
  itemId: string
  endUserId: string
  locationId: string
  valueUnitsA: string
  valueEstimA: number
  valueActualA: number
  valueUnitsB: string
  valueEstimB: number
  valueActualB: number
  dateEstimStart: string
  dateEstimEnd: string
  dateActionStart: string
  dateActionEnd: string
  dataActions: string
  actionTypeId: string
  index: string
  attachments: string
};

export = Action;