import { useCalendarStore } from "../../hooks/useCalendarStore"

export const FabDelete = () => {

  const { startDeletingteEvent, hasEventSelected } = useCalendarStore();

  const handleDelete = () => {
    startDeletingteEvent();
  }

  return (
    <button
      className="btn btn-danger fab-delete"
      style= {{
        display: hasEventSelected ? 'block' : 'none'
      }}
      onClick={ handleDelete }
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  )
}