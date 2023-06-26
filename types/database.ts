import { ColumnType, Generated, Insertable, Selectable, Updateable } from 'kysely'  
import { TrackAnalysis } from './spotify'

export interface UserTable {
    id: Generated<number>

    user_analysis: TrackAnalysis
}