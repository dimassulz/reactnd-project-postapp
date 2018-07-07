import cuid from "cuid";
import React from "react";
import Moment from "react-moment";

Moment.globalLocale = "pt-br";
Moment.globalFormat = ` HH:mm:ss \\d\\e DD/MM/YYYY`;

export const newId = () => cuid();

export const newDate = () => Date.now();

export const formatTime = time => <Moment>{new Date(time)}</Moment>;

export const deleteItem = list =>
  list.reduce((result, item) => {
    if (!item.deleted) {
      result[item.id] = item;
    }
    return result;
  }, {});
