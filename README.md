## JavaScript Chapter 21
It is my coding practice with the TUTORIAL of Dave Gray. 

## Source
### Dave Gray 的 JavaScript 課程
https://youtube.com/playlist?list=PL0Zuz27SZ-6Oi6xNtL_fwCrwpuqylMsgT

### Dave Gray 的 YouTube 頻道
https://www.youtube.com/@DaveGrayTeachesCode

## JavaScript Chapter 21
   Quick Concept outline
   中文摘要說明與重點提問

###  1. The Document Object Model: DOM

###  2. Selecting an element with an ID
        宣告指派 document.getElementById 選取 id，id 名稱為 view1

###  3. Selecting an element with a query selector
        宣告指派 document.querySelector 和 # 選取 id，id 名稱為 view2

###  4. Changing the CSS with the style property
        (1)只顯示 view2
        (2)顯示 view1 和 view2
        (3)只顯示 view1

###  5. Selecting elements by class name
        宣告 views 指派 document.getElementsByClassName 選取 class，class 名稱為 view

###  6. Selecting elements with querySelectorAll()
        宣告 sameViews 指派 document.querySelectorAll('.view') 選取 class，class 名稱為 view

###  7. HTMLCollection vs NodeList

###  8. Searching within the results of a previous selector
        宣告 divs 指派 querySelectorAll() 選取 view1 先前的 selector選擇器，選擇器 名稱為 div，集合為 NodeList

view1.("div");
###  9. Selecting elements by tag name
        宣告 sameDivs 指派 getElementsByTagName() 選取 view1 的 tag，tag 名稱為 div，集合為 NodeList

### 10. Applying more specific DOM selectors
        宣告 evenDivs 指派 querySelectorAll() 選取 view1 的 特定selector選擇器，選取第二個、第四個、第六個、第八個、第十個和第十二個 div，集合為 NodeList

### 11. Modifying CSS with a DOM selector
        (1)使用 for 迴圈設定偶數的 div為 darkblue暗藍色
        (2)設定為 寬度和高度為 200px

### 12. Changing text inside of an element
        宣告 navText 指派 document.querySelector 選取 nav h1，使用 Node.textContent 修改 h1標題文字為 Hello World!

### 13. Changing the HTML within a parent element
        (1)宣告 navbar 指派 document.querySelector 選取 nav，使用 Element.innerHTML 修改 Hello!置左，This should align right.預設置右
        (2)Hello! 和 This should align right. 置左
        (3)Hello! 和 This should align right. 置右
        (4)Hello! 和 This should align right. 均分空格
        (5)Hello! 和 This should align right. 空格置中

### 14. Navigating the DOM tree
        (1)集合為 NodeList，六個不同的 div
        (2)第二個 div
        (3)第二個 div 的母元素為 section
        (4)第二個 div 母元素的子元素集合為 NodeList，十二個 div
        (5)第二個 div 母元素的子元素集合為 NodeList，十二個 div 和 十二個 text
        (6)使用 hasChildNodes() method 確認是否有子節點
        (7)第二個 div 母元素的最後一個子元素為 text 節點
        (8)第二個 div 母元素的最後一個子元素為 <div style="background-color: darkblue;">12</div>
        (9)第二個 div 母元素的最後一個子元素為 text 節點；第二個 div 母元素的第一個子元素為 <div>1</div>
        (10)第二個 div 母元素的後面一個兄弟元素為 text 節點；
        (11)text 節點為 <div>3</div>
        (12)第二個 div 母元素的前面一個兄弟元素為 text 節點；text 節點為 <div>1</div>
        (13)第二個 div 母元素的後面一個兄弟元素為 text 節點；text 節點為 <div>3</div>；後面一個兄弟元素為 <div style="background-color: darkblue;">4</div>
        (14)view1 不顯示，view2 顯示方式為 flex，flexDirection 為 row，flexWrap 為 wrap，margin 為 10px

### 15. Removing all the nodes in a parent element
        若 view2 的 lastChild，即 h2 存在，移除 <h2>My 2nd View</h2>

### 16. Creating new elements
        宣告 createDivs 指派 arrow function；宣告 newDiv 為 document.createElement() 稍後新增 div 元素

### 17. Adding new property values to the element
        設定 Node.textContent 為 iter 參數，接著修改 style樣式

### 18. Appending the new element to the DOM
        使用 append() 方法加入新的 div，文字為 10，母元素為 view2

### 19. Creating new elements with a loop
        使用 for 迴圈設定十二個新的 div，文字為 1 至 12，母元素為 view2