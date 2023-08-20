import React, { useEffect, useMemo, useState } from 'react';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import { Box } from '@mui/material';
import styles from './AnalyticsPage.module.scss';
import { Person } from 'entities/analytics';
import { usePersonService } from 'features/analytics';
import { columnsDefinition } from './AnalyticsPage.columns';
function AnalyticsPage () {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => columnsDefinition,[],
  );

  const { getPersons } = usePersonService();
  const [data, setData] = useState<Person[]>([]);

  useEffect(() => {
    getPersons().then((persons) => {
      setData(persons);
    });
  }, [getPersons]);

  return (
    <Box className={styles.container}>
      <MaterialReactTable columns={columns} data={data} />
    </Box>
  );
}

export default AnalyticsPage;
