import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Write from '../../Components/Write/Write';
import { changeField, initializeForm } from '../../modules/write';

const WriteContainer = () => {
  const dispatch = useDispatch();
  const { name, intro, skills, participation_cretira, rule } = useSelector(
    ({ write }) => ({
      name: write.name,
      intro: write.intro,
      skills: write.skills,
      participation_cretira: write.participation_cretira,
      rule: write.rule,
    })
  );

  const onChangeField = useCallback((payload) => dispatch(changeField(payload)), [
    dispatch,
  ]);

  useEffect(() => {
    return () => {
      dispatch(initializeForm());
    };
  }, [dispatch]);

  return (
    <Write
      onChangeField={onChangeField}
      name={name}
      intro={intro}
      skills={skills}
      participation_cretira={participation_cretira}
      rule={rule}
    />
  );
};

export default WriteContainer;
