const $btn = document.getElementById('button2')
$btn.addEventListener('click', () => {
    const $inp = document.getElementById('inp').value
    // console.log($inp)

    // 処理開始確認
    const yn = confirm('Gitbio取得処理を開始しますか？')
    if (yn) {
    
    // 非同期処理をおこなう関数を宣言
    const getGitbio = async () => {
      const message = 'GitHubのbio：\r\n';
      const url_base = 'https://api.github.com/users/'
      const url = url_base + $inp //'https://api.github.com/users/baritone46'
      //ラムダ技術部
      // const url = 'https://api.github.com/users/yoidea'
      const json = await fetch(url)
          .then(res => {
              console.log('これは非同期処理成功時のメッセージです')
              return res.json()
          }).catch(error => {
              console.error('これは非同期処理失敗時のメッセージです。', error)
              return null
          });
      $elm = json.bio;

      const Ch = 'test2';
      document.getElementById("text").textContent = message;
      document.getElementById("text2").textContent = $elm;
    //   document.getElementById("text").className = Ch;
      document.getElementById("text2").className = Ch;
    }
    getGitbio();
    
    } else {
    
    alert('キャンセルしました')
    
    }
});

