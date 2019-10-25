const createDataObject = (data) => {
  const { relations, attributes } = data;
  const resourceData = {
    ...attributes,
  };

  if (relations) {
    // eslint-disable-next-line array-callback-return
    Object.keys(relations).map((key) => {
      const relation = relations[key];
      console.log(relation);
      if (relation.length > 0) {
        resourceData[key] = relation.map(item => ({ ...item.attributes }));
      } else {
        resourceData[key] = { ...relation.attributes };
      }
    });
  }

  return resourceData;
};

const createObjectFromKnexQuery = (data) => {
  let dataObject = {};

  if (data.length > 0) {
    dataObject = data.map(item => createDataObject(item));
  } else {
    dataObject = createDataObject(data);
  }
  console.log(dataObject);
  return dataObject;
};

module.exports = createObjectFromKnexQuery;
