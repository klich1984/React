import React, { useState } from 'react'
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import PanToolIcon from '@material-ui/icons/PanTool'

const AlertDialog = ({ id, deleteSong }) => {
  // Hook, variable open para controlar la alerta, y su metodo de acyualizacion es setOpen
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

	return <>
    <IconButton edge="end" onClick={handleOpen}>
      <DeleteIcon />
    </IconButton>
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">Alerta de Eliminación</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ¿Estas a punto de borrar la cancion con el id <b>{id}</b>?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
          onClick={()=>{
            deleteSong(id)
            handleClose()
          }}
          color="primary">
            <DeleteForeverIcon /> Si, eliminar
          </Button>
          <Button
            onClick={handleClose}
            color="primary"
            autoFocus>
              <PanToolIcon />No, detente
          </Button>
        </DialogActions>
      </Dialog>
  </>
}

export default AlertDialog;
