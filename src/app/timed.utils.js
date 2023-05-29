export const updatedEvents = (events, title, clicked) => {
  const existingEvents = events.filter((e) => e.date !== clicked);
  const eventToUpdate = events.filter((e) => e.date === clicked);
  const existingTitles = eventToUpdate.map((item) => item.titles);

  if (existingTitles.length > 0) {
    const titleToUpdate = [...existingTitles[0], title];

    return [...existingEvents, { titles: titleToUpdate, date: clicked }];
  }

  return [...events, { titles: [title], date: clicked }];
};
