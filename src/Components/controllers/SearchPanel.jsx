import React from 'react'
import {Input,Button} from 'reactstrap'

export default function SearchPanel({turms,handleSearch,toggleForm}) {
  return (
    <div className='d-flex'>
          <Input
              placeholder='Search here'
              className='me-3'
              value={turms}
              onChange={(e)=> handleSearch(e)}
          />
          <Button className='bg-success' onClick={toggleForm}>
              New
          </Button>
    </div>
  )
}
