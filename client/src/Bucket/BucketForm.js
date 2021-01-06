import React, { useState, useEffect } from "react";
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { addBuckets, updateBuckets } from "../actions/userActions";

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
      <div className="container p-3 my-3 bg-primary text-white">
        <h1>Add Bucket</h1>
      </div>
      <div className="btn-block pull-right">
        <Row>
          <Col md={7}>
          </Col>
          <Col md={5}>
            <Link to="/allbucket" className="btn btn-info mr-1">ALL Bucket's</Link>
            <Link to="/" className="btn btn-info mr-1">ALL Todo's</Link>
            <Link to="/todo" className="btn btn-info"> + Todo</Link>
          </Col>
        </Row>
      </div>
      <div>
        <form>
          <div className="form-group">
            <label for="exampleFormControlInput1">Bucket Name</label>
            <input name="bucket" type="text" className="form-control" id="exampleFormControlInput1" defaultValue={name} onChange={(e) => setBucketName(e.target.value)} required />
          </div>
          <button className="btn btn-primary" onClick={(e) => addUpdateBucket(e)}>{bucketId ? 'Update' : 'Add'}</button>
        </form>
      </div>
    </div >
  )
};

export default BucketForm;
