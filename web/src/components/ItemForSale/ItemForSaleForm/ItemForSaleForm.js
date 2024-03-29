import {
  Form,
  FormError,
  FieldError,
  Label,
  HiddenField,
  SelectField,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const ItemForSaleForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.itemForSale?.id)
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
          name="cardRef"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Your Reference
        </Label>

        <TextField
          name="cardRef"
          defaultValue={props.itemForSale?.cardRef}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="cardRef" className="rw-field-error" />

        <Label
          name="quantity"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Quantity
        </Label>

        <NumberField
          name="quantity"
          defaultValue={props.itemForSale?.quantity}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="quantity" className="rw-field-error" />

        <Label
          name="price"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Price
        </Label>

        <TextField
          name="price"
          defaultValue={props.itemForSale?.price}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="price" className="rw-field-error" />

        <Label
          name="condition"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Condition
        </Label>

        <TextField
          name="condition"
          defaultValue={props.itemForSale?.condition}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="condition" className="rw-field-error" />

        <Label
          name="cardId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Card Name
        </Label>

        <SelectField
          name="cardId"
          defaultValue={props.itemForSale?.cardId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
          multiple={false}
        >
          <option value={1}>Nashi Moon Sage's Scion </option>
          <option value={2}>Light-Paws, Emperor's Voice </option>
          <option value={3}>Omniscience </option>
          <option value={4}>Wheel of Fortune </option>
          <option value={5}>Hinata, Dawn-Crowned </option>
          <option value={6}>Council's Judgment </option>
          <option value={7}>Cultivator Colossus </option>
          <option value={8}>Hex Parasite </option>
          <option value={9}>Jeweled Lotus </option>
          <option value={10}>Omnath, Locus of Creation </option>
          <option value={11}>The Reality Chip </option>
          <option value={12}>Stoneforge Mystic </option>
          <option value={13}>Lion's Eye Diamond </option>
          <option value={14}>Goatnapper </option>
        </SelectField>

        <FieldError name="cardId" className="rw-field-error" />

        {/* <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>

        <NumberField
          name="userId"
          defaultValue={props.itemForSale?.userId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        /> */}

        {/* <FieldError name="userId" className="rw-field-error" /> */}

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ItemForSaleForm
