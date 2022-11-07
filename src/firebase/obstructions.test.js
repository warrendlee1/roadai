import { createObstruction } from './obstructions';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

test('New obstruction document is created in db', async () => {
  const mockData = {
    label: 'Pothole',
    uid: Date.now.toString,
    geoData: {
      latitude: 33.971082047088956,
      longitude: -118.41791552697393,
    },
  };

  const obstruction = await createObstruction({ ...mockData });
  const docSnap = await getDoc(doc(db, 'obstructions', obstruction.id));
  delete obstruction.id;
  expect(docSnap.data()).toBe(obstruction);
});
