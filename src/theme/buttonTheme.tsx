import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    saveButton: {
      backgroundColor: '#4caf50', // لون الخلفية للزر Save
      color: '#fff', // لون النص للزر Save
      '&:hover': {
        backgroundColor: '#388e3c', // لون الخلفية عند التحوي فوق الزر Save
      },
    },
    cancelButton: {
      color: '#000', // لون النص للزر Cancel
      '&:hover': {
        backgroundColor: 'transparent', // لون الخلفية عند التحوي فوق الزر Cancel
      },
    },
  }));