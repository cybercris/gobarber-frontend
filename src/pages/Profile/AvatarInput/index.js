import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import api from '~/services/api';

import { Container } from './styles';

export default function AvatarInput({ formik }) {
  const [preview, setPreview] = useState();

  const profile = useSelector((state) => state.user.profile);

  useEffect(() => {
    setPreview(profile.avatar.url);
  }, [profile.avatar.url]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setPreview(url);
    formik.setFieldValue('avatar_id', id);
  }

  return (
    <Container>
      <label htmlFor="avatar_id">
        <img
          src={
            preview || 'https://api.adorable.io/avatars/50/abott@adorable.png'
          }
          alt=""
        />

        <input
          type="file"
          id="avatar_id"
          name="avatar_id"
          accept="image/*"
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}

AvatarInput.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
