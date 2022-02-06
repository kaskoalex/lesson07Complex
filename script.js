"use strict";

const week = ['Воскресенье','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let date = new Date();
let day=date.getDay()


for (let i = 0, len = week.length; i < len; i++) {
  let html = week[i];
  if (i > 4) html = html.italics(); // выходные
  if ((i) == day) html = html.bold(); // сегодня

  const div = document.createElement('div');
  div.innerHTML = html;
  document.body.appendChild(div);
}