# svgControl
control svg with Jquery 
## 當一個svg內放有多張path圖案，希望整理使用到的多個id
### detect
###### html上設定的一個區域來檢查
```html
 <section class="detect">
      <svg class="icon" viewbox="0 0 35 35">
          <use id="test" xlink:href="./includes/images/show.svg?20200302#Coke"></use>
      </svg>

      <svg class="icon" viewbox="0 0 35 35">
          <use id="test" xlink:href="./includes/images/show.svg?20200302#Juice"></use>
      </svg>
  </section>
```
###### 執行getSvgId()取得array型態的所有id
