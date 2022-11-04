const render = (options) => {
  document.querySelector('#current-env').innerHTML = 'qiankun'
  // const globalState = options.getGlobalState()

  // 展示基座下发的状态
  const node = document.createElement('div')
  node.innerHTML = 'Sub HTML'
  // node.innerHTML = `基座下发的globalState： <code>${JSON.stringify(globalState)}</code>。<a target="_blank" href="${window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__}">打开独立运行环境</a>`

  document.querySelector('.container').appendChild(node)
  return Promise.resolve();
};

((global) => {
  global['purehtml'] = {
    bootstrap: () => {
      console.log('purehtml bootstrap');
      return Promise.resolve();
    },
    mount: (options) => {
      console.log('purehtml mount');
      return render(options);
    },
    unmount: () => {
      console.log('purehtml unmount');
      return Promise.resolve();
    },
  };
})(window);