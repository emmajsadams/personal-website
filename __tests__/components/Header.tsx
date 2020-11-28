import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Header from '../../components/Header'

test('renders only resume link', async () => {
	render(<Header showBlog={false} showResume={true} showPDFResume={false} />)

	expect(screen.getByText('Résumé')).toBeTruthy()
	expect(() => screen.getByText('Blog')).toThrow()
	expect(() =>
		screen.getByText('Download a PDF version of this resume'),
	).toThrow()
})

test('renders only blog link', async () => {
	render(<Header showBlog={true} showResume={false} showPDFResume={false} />)

	expect(screen.getByText('Blog')).toBeTruthy()
	expect(() => screen.getByText('Résumé')).toThrow()
	expect(() =>
		screen.getByText('Download a PDF version of this resume'),
	).toThrow()
})

test('renders only pdf link', async () => {
	render(<Header showBlog={false} showResume={false} showPDFResume={true} />)

	expect(screen.getByText('Download a PDF version of this resume')).toBeTruthy()
	expect(() => screen.getByText('Résumé')).toThrow()
	expect(() => screen.getByText('Blog')).toThrow()
})

test('renders only pdf link and resume link', async () => {
	render(<Header showBlog={false} showResume={true} showPDFResume={true} />)

	expect(screen.getByText('Download a PDF version of this resume')).toBeTruthy()
	expect(screen.getByText('Résumé')).toBeTruthy()
	expect(() => screen.getByText('Blog')).toThrow()
})

test('renders only blog and resume link', async () => {
	render(<Header showBlog={true} showResume={true} showPDFResume={false} />)

	expect(screen.getByText('Blog')).toBeTruthy()
	expect(screen.getByText('Résumé')).toBeTruthy()
	expect(() =>
		screen.getByText('Download a PDF version of this resume'),
	).toThrow()
})

test('renders only blog and pdf link', async () => {
	render(<Header showBlog={true} showResume={false} showPDFResume={true} />)

	expect(screen.getByText('Download a PDF version of this resume')).toBeTruthy()
	expect(screen.getByText('Blog')).toBeTruthy()
	expect(() => screen.getByText('Résumé')).toThrow()
})

test('renders all links', async () => {
	render(<Header showBlog={true} showResume={true} showPDFResume={true} />)

	expect(screen.getByText('Blog')).toBeTruthy()
	expect(screen.getByText('Résumé')).toBeTruthy()
	expect(screen.getByText('Download a PDF version of this resume')).toBeTruthy()
})
