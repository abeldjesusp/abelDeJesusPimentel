USE [abel_db]
GO
/****** Object:  Table [dbo].[departamentos]    Script Date: 2/2/2021 10:05:36 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[departamentos](
	[codigo] [nchar](5) NOT NULL,
	[nombre] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_departamentos] PRIMARY KEY CLUSTERED 
(
	[codigo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[usuarios]    Script Date: 2/2/2021 10:05:36 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[usuarios](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombres] [nvarchar](50) NOT NULL,
	[apellidos] [nvarchar](50) NOT NULL,
	[cedula] [nchar](11) NOT NULL,
	[genero] [nchar](1) NOT NULL,
	[fecha_nacimiento] [date] NOT NULL,
	[departamento] [nchar](5) NOT NULL,
	[cargo] [nvarchar](100) NOT NULL,
	[supervisor_inmediato] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_usuarios] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
