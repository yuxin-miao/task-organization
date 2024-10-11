import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { useEffect } from "react";
import { useAppState } from "../state/AppStateContext";
import { DragItem } from "../DragItem";
import { setDraggedItem } from "../state/actions";
// “This hook will return a drag method that accepts the ref of a draggable element.
// Whenever we start dragging the item, the hook will dispatch a SET_DRAG_ITEM action to save the item in the app state.
// When we stop dragging, it will dispatch this action again with null as the payload.”

export const useItemDrag = (item: DragItem) => {
	const { dispatch } = useAppState();
	const [, drag, preview] = useDrag({
		type: item.type,
		item: () => {
			dispatch(setDraggedItem(item));
			return item;
		},
		end: () => dispatch(setDraggedItem(null)),
	});
	// drag: “DragSource Ref: A connector function for the drag source. This must be attached to the draggable portion of the DOM.”
	//“The preview function accepts an element or node to use as a drag preview. ”

	useEffect(() => {
		preview(getEmptyImage(), { captureDraggingState: true });
	}, [preview]);

	return { drag };
};
