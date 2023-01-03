專案名稱：TodoList

網站已部屬至Github pages上，請至下列網址查看：

    

文件結構：

    -- /src  專案根目錄。
        |---index.js   整個專案項目的入口文件。
        |---App.jsx     整個專案項目的最上層組件(專案所需物件導向中的物件定義在該文件中)。
        |---/components 存放各組件之目錄。
          |---Header.jsx          展示TodoList之標題部分的組件。
          |---InitTodoList.jsx    todo list應用初始載入，尚未添加任何todo時展示的畫面。
          |---Main.jsx            整個項目的主要部分(展示todo list、完成率進度條等)。
            |---Progress.jsx      展示完成率與進度條的組件。
            |---List.jsx          用於遍歷所有todo項目的組件(亦即todoList，包含所有todo項目的列表)。
              |---Item.jsx        用於展示每個todo項目的組件。
                |---Checkbox.jsx  每個todo中勾選按鈕的組件。
          |---MoveDoneToEnd.jsx   move done to end功能切換之組件。
          |---AddTodo.jsx         新增待辦事項(todo)的組件。


以下介紹public內sass目錄下的文件：

    -- /sass   存放所有scss檔案之目錄。
        |
        |---/base   存放所有組件共用以及網頁總體使用之樣式的目錄。
          |---_general.scss   網頁總體使用之樣式。
          |---_reset.scss     包括一些樣式的歸零或清除之scss文件。
        |
        |---/components 存放各組件單獨使用之樣式的目錄(名字與組件名相同)。
          |---_allComponents.scss  由於各組件scss檔案數量過多，在此統一引入所有供各組件單獨使用的scss檔案，以方便管理。
        |
        |---/utilities    存放工具類檔案的目錄。
          |---_variables.scss   存放常用變數的文件。
        |---all.scss    import所有scss檔案的總scss檔案(最後將編譯成css文件的總文件)。
