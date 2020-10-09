# vending-shop
Test work

Задача: Разработать прототип вендингового аппарата

Схема работы:

+ Изначально в аппарате имеются несколько товаров, их количество и цена заранее определена.

+ Человек должен выбрать валюту и ввести сумму, которую он кладет в аппарат.

+ При выборе иностранной валюты(USD,EUR), аппарат должен автоматически пересчитывать все в Рубли(RUB).

+ Если юзер вводит некую сумму меньше цены любого из товара, аппарат должен отфильтровать товары и выдать предупреждение о невозможности покупки.

- При выборе товара должно появиться окно с подтверждением заказа. Если да, то человек получает свой товар, его сумма соответственно пересчитывается.

- Если нет, то окно закрывается как не подтвержденное.

- После выбора товара, человек может нажать кнопку `сбросить` сумма в аппарате обнуляется и деньги возвращаются юзеру.

Список обязательных технологий:

 1. React / Redux, HTML5 + CSS3 (SCSS).

 2. HTTP-запросы должны выполняться с помощью вспомогательной библиотеки Axios.
 
 3. Использование дополнительных библиотек, для реализации данного функционала должно сопровождаться комментариями о необходимости ее использования.
