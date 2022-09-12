const onClickAdd = () => {
    // テキストボックスの値を取得し、初期化する。
    const inputText = document.getElementById('add-text').value;
    document.getElementById('add-text').value = '';
    createIncompleteList(inputText);

    // 未完了リストから指定の要素を削除
    const deleteFromIncompleteList = (target) => {
        document.getElementById('imcomplete-list').removeChild(target);

    }
    //未完了に追加する関数
    // const createIncompleteList=(text)=>{
    function createIncompleteList(text){
        // liタグ
        const li = document.createElement('li');
        li.className = 'list-row';
        //divタグ生成
        const div = document.createElement('div');
        div.className = 'todo-item';
        // pタグ生成
        const p = document.createElement('p');
        p.innerText = inputText;
        // button(戻る)タグ生成
        const returnButton = document.createElement('button');
        returnButton.innerText = "戻る";

        // button(完了)タグを生成
        const completeButton = document.createElement('button');
        completeButton.innerText = "完了";
        completeButton.addEventListener('click', () => {
            // 未完了リストから削除
            deleteFromIncompleteList(completeButton.parentNode.parentNode);

            // 完了リストに追加する要素
            const addTarget = completeButton.parentNode.parentNode;
            // TODO内容テキストを取得
            const text = completeButton.parentNode.firstElementChild.innerText;
            // div以下を初期化
            addTarget.textContent = null;
            // divタグ生成
            const div = document.createElement('div');
            div.className = 'todo-item';
            //pタグを生成
            const p = document.createElement('p');
            p.innerText = text;

            // buttonタグ生成
            const backButton = document.createElement('button');
            backButton.innerText = "戻る";
            backButton.addEventListener('click', () => {
                // 押されたボタンの親タグを完了リストから削除
                const deleteTarget = backButton.parentNode.parentNode;
                document.getElementById('complete-list').removeChild(deleteTarget);
                // テキスト取得
                const text = backButton.parentNode.parentNode.firstElementChild.innerText;
                createIncompleteList(text);
            });
            //liタグの子要素に各要素を設定
            addTarget.appendChild(div).appendChild(p);
            div.appendChild(backButton);
            console.log(addTarget);
            // 完了リストに追加
            document.getElementById('complete-list').appendChild(li);

        })
        // button(削除)タグを生成
        const deleteButton = document.createElement('button');
        deleteButton.innerText = "削除";
        deleteButton.addEventListener('click', () => {
            // 押された削除ボタンの親タグを未完了リスト削除
            deleteFromIncompleteList(deleteButton.parentNode.parentNode);

        })

        // liタグ子要素に各要素を設定
        li.appendChild(div).appendChild(p);
        div.appendChild(completeButton);
        div.appendChild(deleteButton);

        console.log(li);

        // 未完了のリストに追加
        document.getElementById('imcomplete-list').appendChild(li);
    }

}

document.getElementById('add-button').addEventListener('click', () => onClickAdd());
