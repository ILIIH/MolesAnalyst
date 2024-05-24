export const SHOW_TOAST = 'SHOW_TOAST';
export const REFRESH_ASSESSMENTS = 'REFRESH_ASSESSMENTS';
export const SAVE_FORM = 'SAVE_FORM';
export const SUBMIT = 'SUBMIT';
export const SAVE_AS_DRAFT = 'SAVE_AS_DRAFT';
export const RESET_FORM = 'RESET_FORM';

export default {
  list: new Map<string, any>(),

  on(event: string, callback: Function) {
    if (!this.list.has(event)) {
      this.list.set(event, []);
    }

    this.list.get(event).push(callback);

    return this;
  },

  off(event: string) {
    this.list.delete(event);
    return this;
  },

  offCallback(event: string, callback: Function) {
    if (!this.list.has(event)) {
      return;
    }
    const callbackList: Array<Function> = [];
    this.list.get(event).forEach((cb: Function) => {
      if (cb !== callback) {
        callbackList.push(cb);
      }
    });
    this.list.set(event, callbackList);
  },

  emit(event: string, ...args: any) {
    if (!this.list.has(event)) {
      return false;
    }
    this.list
      .get(event)
      .forEach((callback: Function) =>
        setTimeout(() => callback.call(null, ...args), 0),
      );

    return true;
  },
};
