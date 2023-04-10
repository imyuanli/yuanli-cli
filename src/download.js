import download from 'download-git-repo';
import path from 'path';
import ora from 'ora';

const sourceRepository = {
  'gitee': 'direct:https://gitee.com/imyuanli/yuanli-cli/tree/master/template/',
};

// 下载主方法
function downloadTemplate(options) {
  return new Promise((resolve) => {
    const CURRENT_PATH = process.cwd(); // 获取当前路径
    const { projectName, templateName,source} = options; // 获取用户填写的选项
    const targetPath = path.resolve(CURRENT_PATH, projectName); // 目标路径
    const rpUrl = sourceRepository[source] + templateName // 下载的地址
    console.log(" rpUrl",rpUrl)
    download(rpUrl, targetPath, {}, (err) => {
      if (err) {
        console.log(err);
        resolve(false);
      }
      resolve(true);
    });
  });
}

// 处理下载事件
async function handleDownload(options) {
  const newOra = ora('start download template').start();
  try {
    let downloadResult = await downloadTemplate(options);
    downloadResult
      ? newOra.succeed('download template success')
      : newOra.fail('download fail');
  } catch (err) {
    console.log(err);
    newOra.fail('download fail');
  }
}

export { handleDownload };