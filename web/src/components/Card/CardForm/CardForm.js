import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const CardForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.card?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.card?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="setName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Set name
        </Label>

        <TextField
          name="setName"
          defaultValue={props.card?.setName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="setName" className="rw-field-error" />

        <Label
          name="releaseYear"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Release Year
        </Label>

        <NumberField
          name="releaseYear"
          defaultValue={props.card?.releaseYear}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="releaseYear" className="rw-field-error" />

        <Label
          name="startingFromPrice"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Starting from price
        </Label>

        <TextField
          name="startingFromPrice"
          defaultValue={props.card?.startingFromPrice}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="startingFromPrice" className="rw-field-error" />

        <Label
          name="cardImage"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Card image
        </Label>

        <TextField
          name="cardImage"
          defaultValue={props.card?.cardImage}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="cardImage" className="rw-field-error" />

        <Label
          name="color"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Color
        </Label>

        <TextField
          name="color"
          defaultValue={props.card?.color}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="color" className="rw-field-error" />

        <Label
          name="cardType"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Card type
        </Label>

        <TextField
          name="cardType"
          defaultValue={props.card?.cardType}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="cardType" className="rw-field-error" />

        <Label
          name="manaValue"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Mana value
        </Label>

        <NumberField
          name="manaValue"
          defaultValue={props.card?.manaValue}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="manaValue" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CardForm
