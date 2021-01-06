import React, { useState, useEffect } from "react";
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { addBuckets, updateBuckets } from "../actions/userActions";
import CustomNavbar from '../components/Navbar';


const BucketForm = (props) => {
  const [bucketId, setId] = useState(props.match.params.id);
  const [name, setBucketName] = useState('');
  const state = useSelector(state => state);
  const buckets = useSelector(state => state.bucket.bucketlist)
  const dispatch = useDispatch();

  useEffect(() => {
    if (buckets) {
      const bucket = buckets.filter((obj) => {
        return obj.id == bucketId
      })

      if (bucket && bucket[0]) {
        setBucketName(bucket[0].name);
      }
    }
  })

  const addUpdateBucket = (e) => {
    e.preventDefault();
    const data = {
      "name": name
    }

    if (bucketId) {
      dispatch(updateBuckets(data, bucketId));
    } else {
      dispatch(addBuckets(data));
    }
  }


  return (
    <div className="container">
      <CustomNavbar title={'CategoryForm'} />
      <div className='mt-4'>
        <form>
          <div className="form-group">
            <label
              for="exampleFormControlInput1">
              Category Name
               </label>
            <input
              name="bucket"
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              defaultValue={name}
              onChange={(e) => setBucketName(e.target.value)} required />
          </div>
          <Button
            color="info"
            type="button"
            size="sm"
            className="form-control mt-2 mr-2 mb-0 bg-facebook text-white"
            block
            style={{ fontSize: "24px" }}
            onClick={(e) => addUpdateBucket(e)}>
            {bucketId ? 'Update' : 'Add'}
          </Button>
        </form>
      </div>
    </div >
  )
};

export default BucketForm;
