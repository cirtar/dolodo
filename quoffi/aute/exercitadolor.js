async function insertDocument(collection) {
  try {
    const document = { name: 'John Doe' };
    const result = await collection.insertOne(document);
    console.log('Document inserted', result);
    return result;
  } catch (error) {
    console.error('Error inserting document', error);
  }
}
