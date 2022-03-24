import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/ItemForSale/ItemForSalesCell'

const DELETE_ITEM_FOR_SALE_MUTATION = gql`
  mutation DeleteItemForSaleMutation($id: Int!) {
    deleteItemForSale(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const ItemForSalesList = ({ itemForSales }) => {
  const [deleteItemForSale] = useMutation(DELETE_ITEM_FOR_SALE_MUTATION, {
    onCompleted: () => {
      toast.success('ItemForSale deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete itemForSale ' + id + '?')) {
      deleteItemForSale({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Condition</th>
            <th>Card id</th>
            <th>User id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {itemForSales.map((itemForSale) => (
            <tr key={itemForSale.id}>
              <td>{truncate(itemForSale.id)}</td>
              <td>{truncate(itemForSale.name)}</td>
              <td>{truncate(itemForSale.quantity)}</td>
              <td>{truncate(itemForSale.price)}</td>
              <td>{truncate(itemForSale.condition)}</td>
              <td>{truncate(itemForSale.cardId)}</td>
              <td>{truncate(itemForSale.userId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.itemForSale({ id: itemForSale.id })}
                    title={'Show itemForSale ' + itemForSale.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editItemForSale({ id: itemForSale.id })}
                    title={'Edit itemForSale ' + itemForSale.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete itemForSale ' + itemForSale.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(itemForSale.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ItemForSalesList
