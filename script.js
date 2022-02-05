"use strict";

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let date = new Date();
let day=date.getDay()


for (let i = 0, len = week.length; i < len; i++) {
  let html = week[i];
  if (i > 4) html = html.italics(); // выходные
  if ((i+1) == day) html = html.bold(); // сегодня

  const div = document.createElement('div');
  div.innerHTML = html;
  document.body.appendChild(div);
}