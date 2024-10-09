// find items by indices

type Item = { id: string };
// “constrained our generic function to have the fields that are defined on the Item type, in this case the id field.”

export const findItemIndexById = <TItem extends Item>(
	items: TItem[],
	id: string
) => {
	return items.findIndex((item: TItem) => item.id === id);
};
