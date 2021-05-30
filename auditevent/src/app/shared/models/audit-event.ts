export interface AuditEvent {
    resourceType: string,
    id: string,
    type: Coding,
    subtype?: Coding[],
    action?: String,
    period?: Period,
    recorded: String,
    outcome?:String,
    outcomeDesc?: String
    purposeOfEvent?: CodeableConcept[],
    agent: Agent[]
    source: Source
    entity?: Entity[]
}

export interface Agent {
    type?: CodeableConcept,
    role?: CodeableConcept[],
    who?: Referencea,
    altId?: string,
    name?: string,
    requestor: boolean,
    location?: Referencea,
    policy?: String[],
    media?: Coding,
    network?: Network,
    purposeOfUse?: CodeableConcept[]
}

export interface Source {
    site?: String,
    observer: Referencea,
    type?: Coding[]
}

export interface Period {
    start: String,
    end: String
}

export interface Coding {
    system?: String,
    version?: String,
    code?: String,
    display?: String,
    userSelected?: boolean
}

export interface CodeableConcept {
    coding?: Coding[],
    text?: String
}

export interface Referencea {
    reference?: String,
    type?: String,
    identifier?: Identifier,
    display?: String
}

export interface Identifier {
    use?: string,
    type?: CodeableConcept,
    system?: string,
    value?: string,
    period?: Period,
    assigner?: Referencea
}

export interface Network {
    address?: string,
    type?: string
}

export interface Entity {
    what?: Referencea,
    type?: Coding,
    role?: Coding,
    lifecycle?: Coding,
    securityLabel?: Coding[],
    name?: string,
    description?: string,
    query?: string,
}