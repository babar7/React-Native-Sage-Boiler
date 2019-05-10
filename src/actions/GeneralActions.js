export function generalAction() {}

export function generalSaveAction(type: string, data: object) {
  return {
    type,
    data
  };
}

export function generalDispatchType(type: string) {
  return {
    type
  };
}
