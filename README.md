# fakeZoomApi

This is an API written to mimic the type of data returned from the Past Meeting Participants route of the Zoom API.

## Routes

| Request | Path                     | Response                                   |
| ------- | ------------------------ | ------------------------------------------ |
| GET     | /participants            | All participants in the database           |
| GET     | /participants/:id        | A single instance from the database        |
| GET     | /participants/person/:id | All instances of a specific person joining |

## Shape of response

```
{
  page_count: number;
  page_size: number;
  total_records: number;
  next_page_token: string;
  participants: [
    {
      db_id: number;
      id: string;
      name: string;
      user_email: string;
    },
  ]
}
```
