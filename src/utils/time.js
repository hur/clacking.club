export const currentTime = () => new Date().getTime();

export const timeDelta = (since) => (currentTime() - since) / (60*1000);