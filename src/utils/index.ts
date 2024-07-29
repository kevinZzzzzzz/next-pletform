/**
 * 获取全局主题颜色
 * @param theme true:暗色主题 false:亮色主题
 * @returns
 */
export const getThemeBg = (theme = true) => {
  return theme
    ? {
        backgroundColor: "rgba(73, 82, 123, 0.3)",
        color: "rgba(255, 255, 255, 1)",
      }
    : {
        backgroundColor: "rgba(255, 255, 255, 1)",
        color: "rgba(0, 0, 0, 1)",
      };
};
/**
 * Note 全局主题样式
 */
export const noteThemeJson = {
  token: {
    colorPrimary: "#126cdb",
  },
  components: {
    Input: {
      hoverBorderColor: "#126cdb",
    },
  },
};

/**
 * 获取当前时间
 * @returns
 */
export const getCurrentTime = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};

/** 获取当前时间 */
export const getCurrentTime2 = () => new Date().toLocaleString();

/**
 * 睡眠函数
 */
export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * 判断是否是空对象
 * * @param obj
 */
export const isEmptyObject = (obj: any) => {
  if (obj === null || obj === undefined) return true;
  return Object.keys(obj).length === 0;
};
