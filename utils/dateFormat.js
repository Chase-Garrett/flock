function dateFormat(createdAtVal) {
  return `${new Date(createdAtVal).getMonth() + 1}/${new Date(
    createdAtVal
  ).getDate()}/${new Date(createdAtVal).getFullYear()}`;
}

module.exports = dateFormat;
