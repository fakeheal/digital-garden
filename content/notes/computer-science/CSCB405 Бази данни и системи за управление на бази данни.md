---
title: CSCB405 Бази данни и системи за управление на бази данни
tags:
  - computer-science
---

> [!info]
> 
> Записки от лекции по ["CSCB405 Бази данни и системи за управление на бази данни" към НБУ](https://ecatalog.nbu.bg/default.asp?V_Year=2018&YSem=5&Spec_ID=&Mod_ID=&PageShow=coursepresent&P_Menu=courses_part2&Fac_ID=3&M_PHD=&P_ID=832&TabIndex=1&K_ID=12965&K_TypeID=10&l=0), водени от доц. Юлиана Пенева  д-р.

### **Lecture 1: Data Organization and Database Basics**

1. **Introduction to Data Management Approaches**:
    
    - **Data Management**: Applying IT to convert large data volumes into meaningful information for business decision-making.
    - **Traditional Approach**:
        - **File-Based Systems**: Collection of files managed by individual programs, leading to data redundancy, dependency on specific applications, and potential inconsistency.
        - **Characteristics**: Separate files for each application, individual programs for data processing, and data definitions embedded in application programs.
        - **Advantages**: Simple to implement with minimal tools.
        - **Disadvantages**: Data redundancy, integrity issues, data-program dependency, and limited flexibility in queries.
    - **Database Approach**:
        - **DBMS**: Software that manages databases, providing a centralized and integrated data storage system accessible to multiple applications.
        - **Characteristics**: Data centralized, managed by DBMS, and accessible by all applications.
        - **Advantages**: Data consistency, integrity, reduced redundancy, and flexibility in data handling.
2. **Core Concepts**:
    
    - **Data vs. Information**:
        - **Data**: Raw facts, like transactions or measurements, waiting for processing.
        - **Information**: Processed and structured data useful for decision-making.
    - **Data Hierarchy**:
        - **Symbol, Field, Record, File**: Hierarchical organization from smallest to largest data units.
    - **Database**: An organized collection of related data designed for specific uses, holding information that multiple users can access and manipulate.
    - **Database Users**:
        - End-users, Database Administrators (DBAs), Database Designers, Application Programmers.
3. **Historical Overview of DBMS**:
    
    - Shift from file-based systems to database systems to address the shortcomings of traditional methods and improve data accessibility and integrity.

---

### **Lecture 2: Data Modeling and DBMS Architecture**

1. **Data Modeling**:
    
    - **Definition**: The process of representing a real-world application’s properties and requirements using abstract structures.
    - **Data Model Types**:
        - **Physical Models**: Low-level structures defining how data is physically stored.
        - **Logical Models**: Conceptualize data independent of physical details.
            - Examples: Hierarchical, Network, and Relational models.
        - **Object-Based Models**: Conceptual models that are closer to how users perceive data.
            - Examples: Entity-Relationship, Object-Oriented models.
    - **Key Components**:
        - **Entities, Attributes, Relationships**: Used to represent data structures and the relationships within an application.
        - **Constraints and Operations**: Define data rules and permissible manipulations.
2. **DBMS Architecture**:
    
    - **Three-Level ANSI/SPARC Architecture**:
        - **Internal (Physical) Level**: Details how data is stored physically.
        - **Conceptual (Logical) Level**: Organizes data as a collective schema, hiding storage details.
        - **External (View) Level**: Defines different views for different user needs.
    - **Data Independence**:
        - **Logical Data Independence**: Change in conceptual schema without affecting the external schema.
        - **Physical Data Independence**: Change in internal schema without affecting conceptual schema.
    - **DBMS Interfaces**:
        - **DDL (Data Definition Language)**: Specifies database schema and constraints.
        - **DML (Data Manipulation Language)**: Defines queries for data retrieval and modification.
        - **Query Languages**: High-level (e.g., SQL) for ease of use; procedural for specific data access patterns.
3. **Functional Components of a DBMS**:
    
    - **Storage Management**: Handles data storage.
    - **Query Processor**: Analyzes and executes database queries.
    - **Transaction Management**: Ensures ACID properties in multi-user environments.
    - **Concurrency Control**: Manages simultaneous data access by multiple users.

---

### **Lecture 3: Relational Model Principles**

1. **Overview of the Relational Model**:
    
    - **Origin**: Developed by E.F. Codd in 1970, revolutionizing database management with a structured approach based on set theory and predicate logic.
    - **Main Concepts**:
        - **Relation**: Analogous to a table, it’s a set of tuples (rows) with each attribute (column) drawn from a domain.
        - **Attributes and Tuples**: Attributes are columns; tuples are rows in the table.
        - **Keys**:
            - **Superkey**: A set of attributes uniquely identifying a tuple.
            - **Candidate Key**: Minimal superkey with no unnecessary attributes.
            - **Primary Key**: The chosen candidate key for a table.
            - **Foreign Key**: A field in one table that uniquely identifies a row in another.
2. **Relational Constraints**:
    
    - **Domain Constraints**: Limits on attribute values based on type or range.
    - **Entity Integrity**: Primary keys cannot be null, ensuring each record’s uniqueness.
    - **Referential Integrity**: Foreign keys must match primary keys in the referenced table or be null.
3. **Relational Algebra**:
    
    - **Set Operations**: Union, intersection, and difference to combine relations.
    - **Relational Operations**:
        - **Selection (σ)**: Extracts rows meeting criteria.
        - **Projection (π)**: Extracts specific columns.
        - **Join (⨝)**: Combines rows from two tables based on a related column.
        - **Division (÷)**: Useful for queries involving “for all” type relationships.

---

### **Lecture 4: SQL Overview**

1. **Introduction to SQL**:
    
    - **Structured Query Language (SQL)**: The primary language for managing relational databases.
    - **Historical Background**: Developed as SEQUEL for System R, it evolved to SQL, a declarative language defined by standards.
    - **Two Main Components**:
        - **Data Definition Language (DDL)**: Commands for defining database schema (CREATE, ALTER, DROP).
        - **Data Manipulation Language (DML)**: Commands for manipulating data (SELECT, INSERT, UPDATE, DELETE).
2. **Core SQL Commands**:
    
    - **SELECT Statement**: Used to retrieve data with various clauses.
        - **FROM**: Specifies tables to retrieve data from.
        - **WHERE**: Filters results based on conditions.
        - **GROUP BY**: Aggregates data by grouping based on a column.
        - **HAVING**: Sets conditions on grouped data.
        - **ORDER BY**: Sorts results by specified columns.
    - **INSERT, UPDATE, DELETE**: Commands for adding, modifying, and removing data.
3. **Advanced SQL Features**:
    
    - **Aggregate Functions**: Functions like COUNT, SUM, AVG, MIN, and MAX to perform calculations on groups of data.
    - **Nested Queries**: Sub-queries used within WHERE clauses or as part of larger queries for complex data retrieval.
    - **UNION, INTERSECT, DIFFERENCE**: Set operations to combine query results.
    - **NULL Handling**: SQL includes specific operations and functions to handle NULL values (e.g., IS NULL, COALESCE).
4. **SQL Standards and Extensions**:
    
    - **Evolution of SQL Standards**:
        - **SQL2 (SQL-92)**: Extended SQL capabilities.
        - **SQL3**: Introduced object-oriented features.
        - **Further Versions**: SQL:2003, SQL:2008, SQL:2011, SQL:2016, each adding functionality like XML support, JSON, and advanced analytics.
    - **SQL’s Role in Data Management**: It is central to relational DBMS due to its versatility, allowing data definition, manipulation, and control all in one language.