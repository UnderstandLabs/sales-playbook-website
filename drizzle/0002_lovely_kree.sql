CREATE TABLE `assessmentAnswers` (
	`id` int AUTO_INCREMENT NOT NULL,
	`assessmentId` int NOT NULL,
	`questionId` int NOT NULL,
	`questionCategory` varchar(100) NOT NULL,
	`answerValue` int NOT NULL,
	`answerText` text NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `assessmentAnswers_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `assessmentResults` (
	`id` int AUTO_INCREMENT NOT NULL,
	`prospectName` varchar(255) NOT NULL,
	`prospectEmail` varchar(320) NOT NULL,
	`prospectCompany` varchar(255) NOT NULL,
	`prospectRole` varchar(255),
	`prospectIndustry` varchar(100),
	`totalScore` int NOT NULL,
	`readinessLevel` varchar(50) NOT NULL,
	`recommendedPlay` varchar(100) NOT NULL,
	`secondaryPlay` varchar(100),
	`categoryScores` text NOT NULL,
	`followUpStatus` enum('new','contacted','qualified','demo_scheduled','closed_won','closed_lost') NOT NULL DEFAULT 'new',
	`assignedTo` varchar(320),
	`notes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `assessmentResults_id` PRIMARY KEY(`id`)
);
