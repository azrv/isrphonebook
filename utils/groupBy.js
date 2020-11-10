const groupBy = (elements, property) => {
  return elements.reduce((collector, el) => {
    (collector[el[property]] = collector[el[property]] || []).push(el);

    return collector;
  }, {})
};

export default groupBy;
